import React, { FormEvent, useState } from "react";

import jsPDF from "jspdf";
import { Button, Form } from "react-bootstrap";

function App() {
    const [input, setInput] = useState(""); // '' is the initial state value

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
    };

    const generatePDF = () => {
        console.log("Generating PDF");
        const doc = new jsPDF("p", "pt", "a4");
        const htmlCode: any = document.querySelector("#myresume");
        console.log(htmlCode)

        // new DOMParser.parseFromString(htmlCode, "text/xml");
        doc.html(htmlCode, {
            callback: function (pdf: any) {
                pdf.save("resume-maulik.pdf");
            },
        });
    };
    return (
        <>
            <input type="text" name="name" id="myname" onChange={changeHandler} />
            <p>Hello input</p>
            <button onClick={generatePDF}>Generate PDF</button>
            <div className='container' id='myresume'>
                <h3>Resume of {input}</h3>
                <header className='hdr-ctr'>
                    <section className='logo-ctr'>
                        <h6 id='hdr-hd-logo'>Image Logo </h6>
                        <img
                            src='http://intranet.daiict.ac.in/~daiict_nt01/Announcement/LOGO/DA-IICT-Emblem-Final%20Colour.png'
                            alt='DAIICT Logo'
                            id='daiict-emblem'
                        />
                    </section>
                    <section className='dtl-ctr'>
                        <h1>Personal Details</h1>
                        <p className='dtl-name'> {input}</p>
                        <div className='dtl-clg'>
                            Dhirubhai Ambani Institute of Information and
                            Communication Technology
                        </div>
                        <div className='dtl-email'>
                            <label htmlFor=''>Email:</label>
                            <a href='mailto:maulik.pipaliya@gmail.com'>
                                maulik.pipaliya@gmail.com
                            </a>
                        </div>
                        <div className='dtl-dob'>
                            <label htmlFor=''>DOB:</label> December 11, 1997
                        </div>
                        <div className='dtl-github'>
                            <label htmlFor=''>GitHub: </label>
                            <a href='https://github.com/maulikpipaliya/'>
                                https://github.com/maulikpipaliya/
                            </a>
                        </div>
                        <div className='dtl-address'>
                            <label htmlFor=''>Address:</label>
                            55, Patel Park, Sitaram Chowk, Chhaprabhatha, Amroli
                            - Variav Road, Surat - 394107
                        </div>
                    </section>
                </header>
                <section className='dtl-education-ctr'>
                    <h1 className='dtl-title'>EDUCATION</h1>
                    <table className='dtl-edu-tbl'>
                        <tr>
                            <th>Degree</th>
                            <th>University</th>
                            <th>Year</th>
                            <th>CPI</th>
                        </tr>
                        <tr>
                            <td className='bold-text'>M.Sc. (IT)</td>
                            <td>
                                Dhirubhai Ambani Institute of Information and
                                Communication Technology (DA-IICT), Gandhinagar,
                                Gujarat
                            </td>
                            <td>2020 - 2022</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td className='bold-text'>B.Sc. (IT)</td>
                            <td>Veer Narmad South Gujarat University</td>
                            <td>2015 - 2018</td>
                            <td>7.14/10</td>
                        </tr>
                        <tr>
                            <td className='bold-text'>Intermediate (+2) </td>
                            <td>Late C.B. Kapadia & Late L.C. Kapadia</td>
                            <td>2013 - 2015</td>
                            <td>71/100</td>
                        </tr>
                        <tr>
                            <td className='bold-text'>High School</td>
                            <td>Suman High School No. 3</td>
                            <td>2010 - 2013</td>
                            <td>88/100</td>
                        </tr>
                    </table>
                </section>
                <section className='dtl-skills'>
                    <h1 className='dtl-title'>SKILLS</h1>
                    <table>
                        <tr>
                            <th>Area of Interest</th>
                            <th>Programming Language(s)</th>
                            <th>Tools and Technologies</th>
                        </tr>
                        <tr>
                            <td>
                                Web Development, DBMS, Shell Scripting, Version
                                Control, RCA
                            </td>
                            <td>C, C++, Java</td>
                            <td>
                                <p>
                                    <label htmlFor='' className='bold-text'>
                                        Basics
                                    </label>
                                    Data Structures and Algorithms, Programming,
                                    Git
                                </p>
                                <p>
                                    <label htmlFor='' className='bold-text'>
                                        Tech:
                                    </label>
                                    NodeJS, Spring+Hibernate, Shell Scripting
                                    (Linux)
                                </p>
                                <p>
                                    <label htmlFor='' className='bold-text'>
                                        Database:{" "}
                                    </label>
                                    MySQL, OracleSQL
                                </p>
                            </td>
                        </tr>
                    </table>
                </section>
                <section className='dtl-experience'>
                    <h1 className='dtl-title'>
                        PROFESSIONAL EXPERIENCE/INTERNSHIPS
                    </h1>
                    <table>
                        <tr>
                            <td>
                                <p className='bold-text'>
                                    Tata Consultancy Services, Mumbai
                                </p>
                                <p>Assistant System Engineer</p>
                                <p>
                                    In a training period, led a team and
                                    developed a web application on
                                    Change/Release Management having backend in
                                    Spring-Hibernate framework Developed
                                    solutions/automated scripts, created code
                                    and made database changes to incorporate
                                    customer requirements
                                </p>
                            </td>
                            <td>
                                <p>2 years</p>
                                <p>July 20, 2018 – July 31, 2020</p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p className='bold-text'>
                                    Dignizant Technologies, Surat
                                </p>
                                <p>Web Developer </p>
                                <p>Guide: Haresh Vavadiya</p>
                            </td>
                            <td>
                                <p>3 months</p>
                                <p>Apr 2015 - Jun 2015 Team Size - 2</p>
                            </td>
                        </tr>
                    </table>
                </section>
                <section className='dtl-projects'>
                    <h1 className='dtl-title'>PROJECTS</h1>
                    <table>
                        <tr>
                            <td className='bold-text'>
                                Change/Release Management (Spring)
                            </td>
                            <td>Sept 2018 – Dec 2018</td>
                        </tr>
                        <tr>
                            <td>
                                As an incubator project, I was a part of the
                                development team for this system. Generated
                                multiple backend APIs and UI/UX Designs for the
                                same.
                            </td>
                            <td>Team size - 8</td>
                        </tr>
                        <tr>
                            <td className='bold-text'>
                                Same Category Phrase Finder (Python)
                            </td>
                            <td>Aug 2018 - Sept 2018</td>
                        </tr>
                        <tr>
                            <td>
                                Created python script which takes a word as an
                                input and suggests the same category words. This
                                can be used in creating recommendation engines
                            </td>
                            <td>Team Size - 1</td>
                        </tr>
                        <tr>
                            <td className='bold-text'>
                                Educatalyst (PHP, MySQL)
                            </td>
                            <td>Apr 2015 - Jun 2015</td>
                        </tr>
                        <tr>
                            <td>
                                As an intern, designed and developed an
                                interactive educational communication platform
                                ‘EduCatalyst’
                            </td>
                            <td>Team size - 2</td>
                        </tr>
                    </table>
                </section>
                <section className='dtl-hobbies'>
                    <h1 className='dtl-title'>HOBBIES</h1>
                    <div>
                        <ul>
                            <li>Hiking</li>
                            <li>R&D</li>
                            <li>Music and Coding</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
}

export default App;
