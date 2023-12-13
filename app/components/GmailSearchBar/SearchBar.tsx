import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
import logger from "@/logger";

import { useState } from "react";

import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";

const SearchBar = () => {
  const [search, setSearch] = useState({
    filteredSuggestions: [""],
    showSuggestions: false,
    userInput: "",
  });

  let mail = ["Internship application", "Trello", "GitHub", "Git"];

  const handleAccept = () => {
    Cookies.set("Cookies", "accepted", { expires: 365 });
    logger.info("cookies accepted");
  };

  return (
    <div className="flex flex-column">
      <div className="rounded-full hover:bg-white bg-transparent w-fit m-auto">
        <SearchIcon color="black" className="m-3"></SearchIcon>
        <input
          type="search"
          className="rounded-full hover:bg-white bg-transparent text-black"
          placeholder="Search mail"
          onChange={(e) => {
            const filterMail: any[] = mail.filter(
              (letter) =>
                letter.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
            );

            setSearch({
              filteredSuggestions: filterMail,
              showSuggestions: true,
              userInput: e.target.value,
            });
          }}
        ></input>
        <HamburgerIcon color="black" className="m-3"></HamburgerIcon>
      </div>
      {search.filteredSuggestions.length ? (
        <ul className="m-auto">
          {search.filteredSuggestions.map((el) => (
            <li>{el}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchBar;
