import { useEffect, useState } from "react";
import {current_Date} from "../../utils/Services/Time"
import DataTable,{createTheme} from "react-data-table-component";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import "react-data-table-component-extensions/dist/index.css";
import DataTableExtensions from "react-data-table-component-extensions";
import "./caisse.css"
import res from "../database"

const Caisse = () => {
    createTheme('solarized', {
        text: {
          primary: '#000',
          secondary: '#000',
        },
        background: {
          default: '#d7e3ff',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });
    const [data, setData] = useState()
    const [date, setDate] = useState(current_Date)
    const  caisseColumns = [
        {
            name: "Date",
            selector: "date",
            sortable: true
        },
        {
            name: "N° Recu",
            selector: "Num_cli",
            sortable: true
        },
        {
            name: "Designation",
            selector: "Des",
            sortable: true
        },
        
        {
            name: "Moyen de Paiement",
            selector: "Moy_Paiement",
            sortable: true
        },
        {
          name: "Montant",
          selector: "Montant",
          sortable: true
      },
      {
        name: "Type De paiement",
        selector: "TypeDepaiment",
        sortable: true
    },
        {

          name: "agent",
          selector: "agent",
          sortable: true
      },
      {
        name: "type",
        selector: "type",
        sortable: true
    },
        {
            name: "Remarque",
            selector: "Remarque",
            sortable: true
        }
       ]

    const caisseCollectionRef = collection(db, "caisse");
    useEffect(() => {
        
      res.get("/caisse.json").then((r) => {
        let x = Object.values(r.data)
        console.log(x)
        setData(x)
    })

    }, [data])
    
    return (   
        <div className="">

                <DataTable
         theme="solarized"
                    responsive
                    columns={caisseColumns}
                    data={data}
                    title={`Caisse ${date}`}
                    defaultSortField="date"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                />
         
        </div>
     );
}
 
export default Caisse;