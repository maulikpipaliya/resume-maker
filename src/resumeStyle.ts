export const resumeStyle = {
    resumeContainer: {
        display: "grid",
        width: "95vw",
        height : "95vh",
        margin: "1rem",
        border: "1px solid red"
    },
    headerContainer: {
        
    },
    divStyle: {
        color: "black",
        width: "600px",
    },
    tableStyle: {
        font: "small",
    },
};


export const oldStyle = {
    "@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')": true,
  "*": { fontFamily: "'Roboto', sans-serif" },
    
    "container": { display: "grid", fontSize: "0.5rem", margin: "auto", height: "700px", width: "550px" },
    "hdr-ctr": { display: "grid", gridTemplateColumns: "1fr 3fr" },
    "dtl-ctr": {
      padding: "10px 30px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "0.1fr 0.8fr 0.7fr 0.7fr 0.7fr 0.5fr",
      gridTemplateAreas:
        '"hd hd" \n    "p p"\n     "dtlclg dtlclg"\n     "dtlemail dtldob"\n     "dtlgh dtlgh"\n     "dtlad dtlad"'
    },
    "dtl-ctr h1": { gridArea: "hd" },
    "dtl-name": { gridArea: "p",fontWeight:600, fontSize: "1rem" },
    "dtl-clg": { gridArea: "dtlclg" },
    "dtl-email": { gridArea: "dtlemail" },
    "dtl-dob": { gridArea: "dtldob" },
    "dtl-github": { gridArea: "dtlgh" },
    "dtl-address": { gridArea: "dtlad" },
    "logo-ctr": { backgroundColor: "white", paddingTop: "1rem", margin: "auto"},
    "daiict-emblem": { maxHeight: "200px", maxWidth: "200px" },
    "dtl-title": {
      
      borderBottom: "5px solid darkgray",
      margin: "30px 0px 10px 0px"
    },
    table: { textAlign: "left", width: "100%" },
    td: { verticalAlign: "top", maxWidth: "250px", margin: "10px 0px" },
    "dtl-edu-tbl th": { borderBottom: "1px solid grey" },
    "dtl-edu-tbl td": {
      padding: "20px 0px",
      margin: "20px 0px",
      maxWidth: "200px"
    },
    "hdr-hd-logo": { visibility: "hidden" },
    "bold-text": { fontWeight: 400 }
  }
  