import styled from "@emotion/styled/types/base";
import { Search } from "@mui/icons-material";
import { TextField, Autocomplete } from "@mui/material";
import SearchBar from "../SearchBar";
import { StyledOptions } from "@emotion/styled";
import { TextFieldProps } from "@mui/material";

const SeachIconWrap = styled('div')(({ theme }) => ({
    // padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const SearchInput = styled(SearchBar)(({ theme: StyledOptions<TextFieldProps> }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    }, 
}))