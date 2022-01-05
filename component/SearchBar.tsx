import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { Autocomplete } from "@mui/material";
import { AutocompleteProps } from "@mui/material";

const suggestionTemp: string[] = ["TEST"];

const SearchBar = (props: TextFieldProps) => {
    return (
        <Autocomplete
            id="searcher"
            freeSolo
            options={suggestionTemp}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="search_input"
                    inputProps={{
                        ...params.inputProps,
                        type: 'search',
                    }}
                />
                )
            }
        />
    )
}

export default SearchBar;