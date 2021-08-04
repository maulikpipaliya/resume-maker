import React, { FC } from "react"
import jsPDF from "jspdf"
import { oldStyle } from "../resumeStyle"
import { Button } from "react-bootstrap"

const ResumeView: FC = () => {
    const generatePDF = () => {
        console.log("Generating PDF")
        const doc = new jsPDF("p", "pt", "a4")
        const htmlCode: any = document.querySelector("#ctr-view")

        doc.html(htmlCode, {
            callback: function (pdf: any) {
                pdf.save("resume-maulik.pdf")
            },
        })
    }

    return (
        <>
            <div style={oldStyle["container"]} id="ctr-view">
                <header style={oldStyle["hdr-ctr"]}>
                    <section style={oldStyle["logo-ctr"]}>
                        <img
                            src="http://intranet.daiict.ac.in/~daiict_nt01/Announcement/LOGO/DA-IICT-Emblem-Final%20Colour.png"
                            alt="DAIICT Logo"
                            id="daiict-emblem"
                            style={oldStyle["daiict-emblem"]}
                        />
                    </section>
                    <section style={oldStyle["dtl-ctr"]}>
                        <p style={oldStyle["dtl-name"]}> PIPALIYA MAULIK B.</p>
                        <div style={oldStyle["dtl-clg"]}>
                            Dhirubhai Ambani Institute of Information and
                            Communication Technology
                        </div>
                        <div style={oldStyle["dtl-email"]}>
                            <label htmlFor="">Email:</label>
                            <a href="mailto:maulik.pipaliya@gmail.com">
                                maulik.pipaliya@gmail.com
                            </a>
                        </div>
                        <div style={oldStyle["dtl-dob"]}>
                            <label htmlFor="">DOB:</label> December 11, 1997
                        </div>
                        <div style={oldStyle["dtl-github"]}>
                            <label htmlFor="">GitHub: </label>
                            <a href="https://github.com/maulikpipaliya/">
                                https://github.com/maulikpipaliya/
                            </a>
                        </div>
                        <div style={oldStyle["dtl-address"]}>
                            <label htmlFor="">Address:</label>
                            55, Patel Park, Sitaram Chowk, Chhaprabhatha, Amroli
                            - Variav Road, Surat - 394107
                        </div>
                    </section>
                </header>
                <section>
                    <h5 style={oldStyle["dtl-title"]}>EDUCATION</h5>
                    <table className="dtl-edu-tbl">
                        <tr>
                            <th>Degree</th>
                            <th>University</th>
                            <th>Year</th>
                            <th>CPI</th>
                        </tr>
                        <tr>
                            <td style={oldStyle["bold-text"]}>M.Sc. (IT)</td>
                            <td>
                                Dhirubhai Ambani Institute of Information and
                                Communication Technology (DA-IICT), Gandhinagar,
                                Gujarat
                            </td>
                            <td>2020 - 2022</td>
                            <td>---</td>
                        </tr>
                        <tr>
                            <td style={oldStyle["bold-text"]}>B.Sc. (IT)</td>
                            <td>Veer Narmad South Gujarat University</td>
                            <td>2015 - 2018</td>
                            <td>7.14/10</td>
                        </tr>
                        <tr>
                            <td style={oldStyle["bold-text"]}>
                                Intermediate (+2){" "}
                            </td>
                            <td>Late C.B. Kapadia & Late L.C. Kapadia</td>
                            <td>2013 - 2015</td>
                            <td>71/100</td>
                        </tr>
                        <tr>
                            <td style={oldStyle["bold-text"]}>High School</td>
                            <td>Suman High School No. 3</td>
                            <td>2010 - 2013</td>
                            <td>88/100</td>
                        </tr>
                    </table>
                </section>
                <section>
                    <h5 style={oldStyle["dtl-title"]}>SKILLS</h5>
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
                                    <label
                                        htmlFor=""
                                        style={oldStyle["bold-text"]}
                                    >
                                        Basics
                                    </label>
                                    Data Structures and Algorithms, Programming,
                                    Git
                                </p>
                                <p>
                                    <label
                                        htmlFor=""
                                        style={oldStyle["bold-text"]}
                                    >
                                        Tech:
                                    </label>
                                    NodeJS, Spring+Hibernate, Shell Scripting
                                    (Linux)
                                </p>
                                <p>
                                    <label
                                        htmlFor=""
                                        style={oldStyle["bold-text"]}
                                    >
                                        Database:{" "}
                                    </label>
                                    MySQL, OracleSQL
                                </p>
                            </td>
                        </tr>
                    </table>
                </section>
                <section>
                    <h5 style={oldStyle["dtl-title"]}>
                        PROFESSIONAL EXPERIENCE/INTERNSHIPS
                    </h5>
                    <table>
                        <tr>
                            <td>
                                <p style={oldStyle["bold-text"]}>
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
                                <p style={oldStyle["bold-text"]}>
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
                <section>
                    <h5 style={oldStyle["dtl-title"]}>PROJECTS</h5>
                    <table>
                        <tr>
                            <td style={oldStyle["bold-text"]}>
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
                            <td style={oldStyle["bold-text"]}>
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
                            <td style={oldStyle["bold-text"]}>
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
                <section>
                    <h1 style={oldStyle["dtl-title"]}>HOBBIES</h1>
                    <div>
                        <ul>
                            <li>Hiking</li>
                            <li>R&D</li>
                            <li>Music and Coding</li>
                        </ul>
                    </div>
                </section>
            </div>
            <Button id="btnGeneratePDF" onClick={generatePDF}>
                Generate PDF
            </Button>
        </>
    )
}

export default ResumeView
