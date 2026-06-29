import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

const Home = () => {

    const [list, setList] = useState([]);

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

            } catch (error) {
                console.log(error);

            }
        }
        fetchData();
    }, []);

    return (
        <Container>
            <h1>Patient List</h1>
            <div>
                <table border="1" cellPadding="10" style={{ width: "100%", borderCollapse: "collapse" }}>

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
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>
            {/* const cellStyle = {
  border: "1px solid black",
  padding: "10px",
}; */}

        </Container>
    )
}
export default Home;