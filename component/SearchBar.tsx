import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { AutocompleteProps } from "@mui/material";

const suggestionTemp: string[] = ["试着搜索一下你想听的音乐"];

const SearchBar = (props: TextFieldProps) => {
    return (
        <Autocomplete
            id="searcher"
            freeSolo
            options={suggestionTemp}
            sx={{ width: 500 }}
            renderInput={(params) => <TextField {...params} label="搜索"/>}
        />
    )
}

export default SearchBar;