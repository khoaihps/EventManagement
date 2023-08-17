import '../style/table.css'
import Tbody from "./Tbody";
import 'flowbite';
import Search from "./Search";
import {useState} from "react";
import Sort from "./Sort";
import "../style/hehe.css";

const Table = ({events}) => {
    const [filteredData, setFilteredData] = useState(events);

    const handleSearch = (searchKey, searchInput) => {
        if (!searchKey.trim() || !searchInput.trim()) {
            setFilteredData(events);
            return;
        }

        if (searchKey === 'Title')
        {
            searchKey = 'name'
        }
        else if (searchKey === "Location")
        {
            searchKey = 'place'
        }
        else
        {
            searchKey = searchKey.toLowerCase();
        }

        const filtered = events.filter(item =>
            item[searchKey].toLowerCase().includes(searchInput.toLowerCase()));

        setFilteredData(filtered);
    };

    const handleSort = (sortKey) => {
        if (sortKey === 'Title')
        {
            sortKey = 'name'
        }
        else if (sortKey === "Location")
        {
            sortKey = 'place'
        }
        else
        {
            sortKey = sortKey.toLowerCase();
        }

        if (sortKey === 'id')
        {
            const sortedData = [...filteredData].sort((a, b) =>
                parseInt(a[sortKey]) - parseInt(b[sortKey]));
            setFilteredData(sortedData);
        }
        else if (sortKey === 'budget')
        {
            const sortedData = [...filteredData].sort((a, b) => {
                const numA = parseInt(a[sortKey].replace(/[$,]/g, ''));
                const numB = parseInt(b[sortKey].replace(/[$,]/g, ''));
                return numA - numB;
            });
            setFilteredData(sortedData);
        }
        else if (sortKey === 'deadline')
        {
            const sortedData = [...filteredData].sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA - dateB;
            });
            setFilteredData(sortedData)
        }
        else
        {
            const sortedData = [...filteredData].sort((a, b) =>
                a[sortKey].localeCompare(b[sortKey]));
            setFilteredData(sortedData);
        }
    }

    const styles = {
        position: 'absolute',
        inset: 'auto auto 0px 0px',
        margin: '0px',
        transform: 'translate3d(522.5px, 3847.5px, 0px)',
    };

    return (
            <div className="lololo table">
                <div className="searchbar flex items-center justify-between pb-4">
                    <Sort onSort={handleSort}/>
                    <Search onSearch={handleSearch} />
                </div>
                <section className="table__body">
                    <table>
                        <thead>
                        <tr>
                            <th> Id </th>
                            <th> Title </th>
                            <th> Location </th>
                            <th> Deadline </th>
                            <th> Status </th>
                            <th> Budget </th>
                        </tr>
                        </thead>
                        <Tbody filteredData={filteredData} />
                    </table>
                </section>
                <ol className="pagination flex justify-center gap-1 text-xs font-medium">
                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Prev Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            1
                        </a>
                    </li>

                    <li
                        className="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                    >
                        2
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            3
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                            4
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                            <span className="sr-only">Next Page</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3 w-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ol>
            </div>
    );
};

export default Table;