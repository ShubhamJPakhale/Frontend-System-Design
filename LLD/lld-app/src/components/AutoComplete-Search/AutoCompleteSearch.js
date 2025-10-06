import React, { useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [autoSuggestlinks, SetautoSuffestLinks] = useState([]);
  const [searchParams, SetsearchParams] = useState("");
  const [isVisibleResult, setIsVisibleResult] = useState(false);
  const [cacheResult, setCacheResult] = useState({});

  useEffect(() => {
    //fetchAutomCompleteData();// without debouncing

    // with debouncing
    if (!searchParams.trim()) return;

    const param = setTimeout(() => {
      fetchAutomCompleteData();
    }, 1000);

    return () => clearTimeout(param);
  }, [searchParams]);

  const fetchAutomCompleteData = async () => {
    try {
      if (cacheResult[searchParams]) {
        SetautoSuffestLinks(cacheResult[searchParams]);
        return;
      } else {
        const result = await fetch(
          `https://www.google.com/complete/search?client=firefox&q=${searchParams}`
        );
        if (!result.ok) throw new Error("Error while fetching results !!");
        const data = await result.json();
        console.log("data = ", data);
        // 3️⃣ Save in cache (immutable update)
        setCacheResult((prevCache) => ({
          ...prevCache,
          [searchParams]: data[1],
        }));
        SetautoSuffestLinks(data[1]);
      }
    } catch (error) {
      console.error(`error while fetching result - ${error.message}`);
    }
  };

  return (
    <div className="m-10 ">
      <div>AutoCompleteSearch</div>

      <input
        type="text"
        className="mt-2 pl-2 pt-1 pb-1 pr-2 border border-black w-[300px]"
        value={searchParams}
        onChange={(e) => {
          SetsearchParams(e.target.value);
        }}
        onFocus={() => {
          setIsVisibleResult(true);
        }}
        onBlur={() => {
          setIsVisibleResult(false);
        }}
      ></input>
      {isVisibleResult && autoSuggestlinks && autoSuggestlinks.length > 0 && (
        <ul className="pl-2 pt-1 pb-1 pr-2 border border-black w-[300px] ">
          {autoSuggestlinks.map((data, i) => (
            <li
              key={data + i}
              className="hover:bg-gray-300 cursor-pointer"
              onMouseDown={() => {
                SetsearchParams(data);
                setIsVisibleResult(false);
              }}
            >
              {data}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteSearch;

// without debouncing
// with debouncing - improvement
// with caching - to reduce api call
