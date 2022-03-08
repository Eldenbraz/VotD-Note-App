import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

export default function Header() {

    const router = useRouter();
    const goTo = (newPath) => { 
        router.push(newPath);
    }
    
    return (
        <AppBar position="relative">
            <Toolbar className="heaven">
                <IconButton
                    size="medium"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                {/* <img src="/Menu.png" alt="Menu" className="logo"/> */}
                
                </IconButton>

                {/* <Button className="button_menu" onClick={() => {goTo('/about');}}>About me</Button> */}
            </Toolbar>
        </AppBar>
    );
}