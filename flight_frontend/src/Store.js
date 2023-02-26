import { configureStore } from '@reduxjs/toolkit';
import GetFlightRedux from "./Redux/Flight/Get-Flight-Redux"
import CreateFlightRedux from "./Redux/Flight/Create-Flight-Redux"
import DeletFlightRedux from "./Redux/Flight/Delet-Flight-Redux"
import EditeFlightRedux from "./Redux/Flight/Edite-Flight-Redux"
import CreatesupplierRedux from "./Redux/Suppliers/Create-Supplier-Redux"
import GetsupplierRedux from "./Redux/Suppliers/Get-Supplier-Redux"
import DeletsupplierRedux from "./Redux/Suppliers/Delet-Supplier-Redux"
import EditesupplierRedux from "./Redux/Suppliers/Edite-Supplier-Redux"
import GetOneFlightRedux from "./Redux/Flight/Get-One-Flight-Redux"
import CreateSeatRedux from "./Redux/Seat/Create-Saet-Redux"
import DeletSeatRedux from "./Redux/Seat/Delet-Saet-Redux"
import EditeSeatRedux from "./Redux/Seat/Edite-Saet-Redux"
import GetSeatRedux from "./Redux/Seat/Get-Saet-Redux"
export const store = configureStore({
    reducer: {
        GetFlightRedux: GetFlightRedux,
        CreateFlightRedux:CreateFlightRedux,
        DeletFlightRedux:DeletFlightRedux,
        EditeFlightRedux:EditeFlightRedux,
        CreatesupplierRedux:CreatesupplierRedux,
        GetsupplierRedux:GetsupplierRedux,
        DeletsupplierRedux:DeletsupplierRedux,
        EditesupplierRedux:EditesupplierRedux,
        GetOneFlightRedux:GetOneFlightRedux,
        CreateSeatRedux:CreateSeatRedux,
        DeletSeatRedux:DeletSeatRedux,
        EditeSeatRedux:EditeSeatRedux,
        GetSeatRedux:GetSeatRedux
    }
})
