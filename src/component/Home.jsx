import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import "./Home.css"

const Home = () => {

    const [list, setList] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("https://demo.lupinary.com/api/patients?user_id=1&clinic_id=1&page_no=0",
                const response = await axios.get("/api/patients?user_id=1&clinic_id=1&page_no=0",
                    {
                        auth: {
                            username: "doctosmarttest",
                            password: "$2y$12$9Za7UtNOljRUWVmVrq8yv.ZpuzEhK6yzI.gdKRCxw2EtUfvxySV3S",
                        },
                    }
                );
                setList(response.data.result)
                setTotalCount(response.data.total_count);
                setMessage(response.data.message);

            } catch (error) {
                console.log(error);

            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <h1 className="text-center">Patient List</h1>
            <div className="table-wrapper">
                {/* <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}> */}
                 <table className="patient-table">

                    <thead>
                        <tr>
                            <th >ID</th>
                            <th>Reg ID</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>DOB</th>
                             <th>Profile Picture</th>
                        </tr>
                    </thead>

                    <tbody>
                        {list.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>{patient.registration_id || "-"}</td>
                                <td>{patient.patient_name}</td>
                                <td>{patient.gender || "-"}</td>
                                <td>{patient.age || "-"}</td>
                                <td>{patient.mobile_no || "-"}</td>
                                <td>{patient.email || "-"}</td>
                                <td>{patient.date_of_birth}</td>
                                <td>{patient.profile_picture || "-"}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
            <h5>Total Patients: {totalCount}</h5>
            {message && <p>{message}</p>}

            {/* const cellStyle = {
  border: "1px solid black",
  padding: "10px",
}; */}

        </Container>
    )
}
export default Home;