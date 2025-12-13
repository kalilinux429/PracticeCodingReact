import React from 'react'

 const users = [
    { id: 1, name: "Suchit", age: 25 },
    { id: 2, name: "Amit", age: 28 },
    { id: 3, name: "Riya", age: 22 }
  ];
   
  const student = [
  {
    id: 1,
    name: "Suchit Kapale",
    email: "suchit@example.com",
    role: "Frontend Developer",
    age: 25
  },
  {
    id: 2,
    name: "Amit Sharma",
    email: "amit@example.com",
    role: "Backend Developer",
    age: 28
  },
  {
    id: 3,
    name: "Riya Patel",
    email: "riya@example.com",
    role: "UI/UX Designer",
    age: 22
  }
];

const Table = () => {
  return (
    <div>
        <table border="1" cellPadding="10">
            {/* thaed used for haeding */}
         
            <thead>
                   <tr>
                <th>Id</th>
                  <th>Name</th>
                    <th>Age</th>
                    </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>
                        <tr key={item.id}>
                              <td>{item.id}</td>
                            <td>{item.name}</td>
                              <td>{item.age}</td>
                           
                        </tr>
                    )
                }
            </tbody>
        </table>

       <table border="1" cellPadding="20">
  <tbody>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Role</th>
      <th>Age</th>
    </tr>

    {student.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.role}</td>
        <td>{item.age}</td>
      </tr>
    ))}
  </tbody>
</table>


    
        
    </div>
  )
}

export default Table

// things to remmber for table maping
// 1.tr for rows 
// 2.th==>is for table header 
// 3. td for table data 
// 4 start mapping in tr id