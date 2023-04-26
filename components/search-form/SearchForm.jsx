import { SubmitButton } from "..";
import InputBox from "../input-box/InputBox";
import './search-form.css'

const SearchForm = (props) => {
  if (props.type === "column") {
    return (
      <form className="search-form column" method="GET" action="/results">
        <InputBox id="searchInfo" name="seachInfo" type="no-label" placeholder="type author's name"></InputBox>
        <SubmitButton text="Search"/>
      </form>
    );
  }
  if (props.type === "row") {
    return (
      <form className="search-form row">
        <InputBox id="searchInfo" name="seachInfo" type="no-label" placeholder="type author's name"></InputBox>
        <SubmitButton text="Search"/>
      </form>
    );
  }
};

export default SearchForm;
