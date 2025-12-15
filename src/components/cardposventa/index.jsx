import React from "react";
import './cardposventa.css'
import { FaBiking } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { PiGear } from "react-icons/pi";
import { LuUser, LuPhone, LuShield, LuUsers } from "react-icons/lu";
import { LuInfo } from "react-icons/lu";
import { LuMessageCircle } from "react-icons/lu";
import { PiGearBold, PiSpiral } from "react-icons/pi";
import { BsBox } from "react-icons/bs";
import { LuHandHeart } from "react-icons/lu";
import { TbClipboardCheck } from "react-icons/tb";
import { Zap, Target, Users, Handshake, Award, Lightbulb, Bike, Wrench, Info,Package } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";

const CardPosventa = ({ icono, titulo, detalle, listaItems = [] }) => {
    const renderIcon = () => {
        switch (icono) {
            case "bike": return <Bike className="card-icon-P" />;
            case "configure": return <Wrench className="card-icon-P" />;
            case "location": return <IoLocationOutline className="card-icon-P" />;
            case "mensaje": return <LuMessageCircle />;
            case "user": return <LuUser />;
            case "phone": return <LuPhone />;
            case "gear": return <PiGearBold />;
            case "shield": return <LuShield />;
            case "box": return <Package />;
            case "users": return <Users />;
            case "info": return <Info className="card-icon-P" />;
            case "heart": return <LuHandHeart />;
            case "confi": return <GrConfigure />;
            case "boardcheck": return <TbClipboardCheck />;
            case "zap": return <Zap className="mision-icono-svg" />;
            case "target": return <Target className="mision-icono-svg" />;
            case "target2": return <Target size={25} />;
            case "heart2": return <FaRegHeart size={25} />;
            case "users2": return <Users size={25} />;
            case "Handshake": return <Handshake size={25} />;
            case "award": return <Award size={25} />;
            case "lightbulb": return <Lightbulb size={25} />;
            default: return null;
        }
    };
    return (
        <div className="card-posventa  h-100">

            <div className="card-contenidoposventa">

                <div className="header-posventa">
                    <div className="icono-posventa">
                        {renderIcon()}
                    </div>

                    <h5 className="titulo-posventa">{titulo}</h5>
                </div>

                <p className="descripcion-posventa">{detalle}</p>

                <ul className="lista-posventa">
                    {listaItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

            </div>
        </div>

    )

};

export default CardPosventa;
