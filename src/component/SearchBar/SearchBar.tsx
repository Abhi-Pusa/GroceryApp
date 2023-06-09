import React,{ChangeEvent} from "react";
import { TextField } from "@mui/material";

export default function SearchBar({setSearchQuery}:any){
    return(
        <TextField
            sx={{width: "100%"}}
            id="search-bar"
            className="text"
            variant="filled"
            inputProps={{
                'data-testid': "search-bar",
            }}
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
                setSearchQuery(e.target.value.toLowerCase());
            }}
            placeholder="Search Items To Add... "
            size="small"
        />
    )
};