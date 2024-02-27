import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";

const AdmissionLetter = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const students = [
        {
            "father": {
                "education": "na",
                "income": 1200,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 20000,
                "mobileNumber": "+918318029261",
                "name": "na ",
                "occupation": "na"
            },
            "classId": null,
            "_id": "65cddbb496944b7cf85610a4",
            "name": "himanshu",
            "institutionId": "jingle122",
            "registrationNumber": "123himu",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "9th",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "FEMALE",
            "identificationMark": "no",
            "bloodGroup": "O+",
            "diseases": "n",
            "caste": "n",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "HINDU",
            "attendanceRecords": [],
            "__v": 0
        },
        {
            "father": {
                "education": "na",
                "income": 4993,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "nan"
            },
            "mother": {
                "education": "na",
                "income": 6000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": null,
            "_id": "65cddd9796944b7cf85610a8",
            "name": "mayank",
            "institutionId": "jingle122",
            "registrationNumber": "mayank123",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "X A",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "AB-",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "n",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "SIKH",
            "attendanceRecords": [],
            "__v": 0
        },
        {
            "father": {
                "education": "na",
                "income": 79000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 6009,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": null,
            "_id": "65cdde7696944b7cf85610ab",
            "name": "na",
            "institutionId": "jingle122",
            "registrationNumber": " na",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "X A",
            "discountInFee": 6,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "AB-",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "MUSLIM",
            "attendanceRecords": [],
            "__v": 0
        },
        {
            "father": {
                "education": "na",
                "income": 7920,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 70000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "A6k5S9vQE",
            "_id": "65cded8917882f629c8539f5",
            "name": "ndydgx",
            "institutionId": "jingle122",
            "registrationNumber": "idiab",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "X B",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "A+",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "SIKH",
            "attendanceRecords": [],
            "__v": 0
        },
        {
            "father": {
                "education": "na",
                "income": 7920,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 70000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "A6k5S9vQE",
            "_id": "65cded9a17882f629c8539f9",
            "name": "veer",
            "institutionId": "jingle122",
            "registrationNumber": "veer12",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "X B",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "A+",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "SIKH",
            "attendanceRecords": [],
            "__v": 0
        },
        {
            "father": {
                "education": "na",
                "income": 600,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 60000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "JhAfjSIBN",
            "_id": "65cdefed17882f629c8539fc",
            "name": "yash",
            "institutionId": "jingle122",
            "registrationNumber": "yahs123",
            "picture": "student.jpg",
            "admissionDate": "15/2/2024",
            "class_": "X A",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "FEMALE",
            "identificationMark": "na",
            "bloodGroup": "AB-",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "JAIN",
            "attendanceRecords": [
                {
                    "_id": "65d076c96a84ba51e8f9ca87",
                    "date": "2024-02-19T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d083a16a84ba51e8f9caa7",
                    "date": "2024-02-18T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d095786a84ba51e8f9caeb",
                    "date": null,
                    "status": "absent"
                },
                {
                    "_id": "65d26db0208a704130a82a95",
                    "date": "2024-08-23T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d26dbf208a704130a82aa6",
                    "date": "2024-02-06T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d278a5208a704130a82ab9",
                    "date": "2024-01-06T00:00:00.000Z",
                    "status": "present"
                }
            ],
            "__v": 6
        },
        {
            "father": {
                "education": "na",
                "income": 50000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 50000,
                "mobileNumber": "+918318029261",
                "name": "na ",
                "occupation": "na"
            },
            "classId": "JhAfjSIBN",
            "_id": "65ce074fd673f13e6821f380",
            "name": "rajeev",
            "institutionId": "jingle122",
            "registrationNumber": "rajeev123",
            "picture": "student.jpg",
            "admissionDate": "12/2/2024",
            "class_": "X A",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "15/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "AB+",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "Yes",
            "totalSiblings": 2,
            "address": "na",
            "religion": "JAIN",
            "attendanceRecords": [
                {
                    "_id": "65d076ca6a84ba51e8f9ca8b",
                    "date": "2024-02-19T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d083a16a84ba51e8f9caab",
                    "date": "2024-02-18T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d095766a84ba51e8f9cadf",
                    "date": null,
                    "status": "absent"
                },
                {
                    "_id": "65d26db0208a704130a82a99",
                    "date": "2024-08-23T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d26dbf208a704130a82aaa",
                    "date": "2024-02-06T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d278a6208a704130a82abd",
                    "date": "2024-01-06T00:00:00.000Z",
                    "status": "present"
                }
            ],
            "__v": 6
        },
        {
            "father": {
                "education": "na",
                "income": 94949,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 28000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "JhAfjSIBN",
            "_id": "65cf0aec6edfd440a04ebb94",
            "name": "Prakhar",
            "institutionId": "jingle122",
            "registrationNumber": "prakhar123",
            "picture": "student.jpg",
            "admissionDate": "16/2/2024",
            "class_": "X A",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "16/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "A-",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "BUDDHIST",
            "attendanceRecords": [
                {
                    "_id": "65d076ca6a84ba51e8f9ca8f",
                    "date": "2024-02-19T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d083a16a84ba51e8f9caaf",
                    "date": "2024-02-18T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d095776a84ba51e8f9cae3",
                    "date": null,
                    "status": "absent"
                },
                {
                    "_id": "65d26db0208a704130a82a9d",
                    "date": "2024-08-23T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d26dbf208a704130a82aae",
                    "date": "2024-02-06T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d278a6208a704130a82ac1",
                    "date": "2024-01-06T00:00:00.000Z",
                    "status": "absent"
                }
            ],
            "__v": 6
        },
        {
            "father": {
                "education": "na",
                "income": 94949,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 28000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "JhAfjSIBN",
            "_id": "65cf0b1d6edfd440a04ebb96",
            "name": "Shikhar",
            "institutionId": "jingle122",
            "registrationNumber": "shikhar123",
            "picture": "student.jpg",
            "admissionDate": "16/2/2024",
            "class_": "X A",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "16/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "A-",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "BUDDHIST",
            "attendanceRecords": [
                {
                    "_id": "65d046973ebc4a4f90a639e6",
                    "date": "2024-02-17T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d076266a84ba51e8f9ca80",
                    "date": "2024-02-18T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d076ca6a84ba51e8f9ca93",
                    "date": "2024-02-19T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d08f426a84ba51e8f9cace",
                    "date": "2024-02-25T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d095776a84ba51e8f9cae7",
                    "date": null,
                    "status": "present"
                },
                {
                    "_id": "65d26db1208a704130a82aa1",
                    "date": "2024-08-23T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d26dbf208a704130a82ab2",
                    "date": "2024-02-06T00:00:00.000Z",
                    "status": "absent"
                },
                {
                    "_id": "65d278a6208a704130a82ac5",
                    "date": "2024-01-06T00:00:00.000Z",
                    "status": "absent"
                }
            ],
            "__v": 8
        },
        {
            "father": {
                "education": "na",
                "income": 61684,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "mother": {
                "education": "na",
                "income": 50000,
                "mobileNumber": "+918318029261",
                "name": "na",
                "occupation": "na"
            },
            "classId": "A6k5S9vQE",
            "_id": "65cf0b6d6edfd440a04ebb99",
            "name": "Harsh",
            "institutionId": "jingle122",
            "registrationNumber": "harsh123",
            "picture": "student.jpg",
            "admissionDate": "16/2/2024",
            "class_": "X B",
            "discountInFee": 10,
            "mobileNumber": "+918318029261",
            "dateOfBirth": "16/2/2024",
            "gender": "MALE",
            "identificationMark": "na",
            "bloodGroup": "O+",
            "diseases": "na",
            "caste": "na",
            "previousSchool": "na",
            "previousRollNumber": "na",
            "additionalNote": "na",
            "orphanStudent": "No",
            "totalSiblings": 2,
            "address": "na",
            "religion": "HINDU",
            "attendanceRecords": [
                {
                    "_id": "65d046963ebc4a4f90a639e2",
                    "date": "2024-02-17T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d076256a84ba51e8f9ca7c",
                    "date": "2024-02-18T00:00:00.000Z",
                    "status": "present"
                },
                {
                    "_id": "65d08f416a84ba51e8f9caca",
                    "date": "2024-02-25T00:00:00.000Z",
                    "status": "present"
                }
            ],
            "__v": 3
        }
    ]
    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filteredStudents = students.filter(student =>
            student.name.toLowerCase().includes(query.toLowerCase()) ||
            student.registrationNumber.toLowerCase().includes(query.toLowerCase()) ||
            student.class_.toLowerCase().includes(query.toLowerCase())
        );

        setSearchResults(filteredStudents);
    };

    return (
        <div className='h-screen m-9 w-full'>
            <div className='flex w-full justify-center items-center mt-10'><input type='text' placeholder='Search Student' value={searchQuery} onChange={handleSearchChange} autoComplete='off' className='focus:outline-none ml-4 ' style={{ background: 'none', border: 'none', borderBottom: '1px solid gray', padding: '9px 10px 8px 10px', width: '250px' }} required /> <CiSearch size='25px' /></div>
            <div className='flex flex-col items-center justify-center'>
                {searchResults.map((student, index) => (
                    <div key={index} className='flex' style={{ width: '250px' }}>
                        <p>{student.registrationNumber}</p>
                        <span className='mx-1'>-</span>
                        <p>{student.name}</p>
                        <span className='mx-1'>-</span>
                        <p>{student.class_}</p>
                    </div>
                ))}
            </div>
        </div >
    );
}
export default AdmissionLetter;  