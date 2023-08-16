import '../style/table.css'
import Tbody from "./Tbody";
import 'flowbite';
import "../style/hehe.css";

const Table = ({employees}) => {
    return (
            <div className="lololo table">
                <section className="table__body">
                    <table className="h-[1000px] ">
                        <thead>
                        <tr>
                            <th> UserName </th>
                            <th> FullName </th>
                            <th> PhoneNumber </th>
                            <th> Email </th>
                            <th> DateOfBirth </th>
                            <th> Department </th>
                        </tr>
                        </thead>
                        <Tbody filteredData={employees} />
                    </table>
                </section>
            </div>
    );
};

export default Table;