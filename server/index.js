const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "translated_files",
});

app.get("/1", (req, res) => {
  db.query("select text from `1_سطر المركز` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/2", (req, res) => {
  db.query("select text from `2_السطر العلوي` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/3", (req, res) => {
  db.query("select text from `3_السطر السفلي` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/4", (req, res) => {
  db.query("select text from `4_اساسي` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/5", (req, res) => {
  db.query("select text from `5_كلمات مخادعة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/6", (req, res) => {
  db.query("select text from `6_الحركات` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/7", (req, res) => {
  db.query("select text from `7_مقاطع عامة واحد` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/8", (req, res) => {
  db.query("select text from `8_ اساسي المرحلة  الاولى` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/9", (req, res) => {
  db.query("select text from `9_كلمات مخادعة الجزء الاول` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/10", (req, res) => {
  db.query("select text from `10_الارقام` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/11", (req, res) => {
  db.query("select text from `11_مقاطع عامة اثنين` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/12", (req, res) => {
  db.query("select text from `12_اساسي المرحلة الثانية` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/13", (req, res) => {
  db.query("select text from `13_الرموز` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/14", (req, res) => {
  db.query("select text from `14_مقاطع عامة الجزء الثالث` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/15", (req, res) => {
  db.query("select text from `15_متقدم الجزء الاول` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/16", (req, res) => {
  db.query("select text from `16_رموز اكثر` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/17", (req, res) => {
  db.query("select text from `17_كلمات مخادعة الجزء الثاني` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/18", (req, res) => {
  db.query("select text from `18_ متقدم الجزء الثالث` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/19", (req, res) => {
  db.query("select text from `19_متقدم الجزء الثاني` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/20", (req, res) => {
  db.query("select text from `20_متقدم المرحلة الرابعة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/21", (req, res) => {
  db.query("select text from `21_متقدم المرحلة الخامسة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/22", (req, res) => {
  db.query("select text from `22_متقدم المرحلة السادسة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/23", (req, res) => {
  db.query("select text from `23_متقدم المرحلة السابعة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/24", (req, res) => {
  db.query("select text from `24_متقدم المرحلة الثامنة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/25", (req, res) => {
  db.query("select text from `25_متقدم المرحلة التاسعة` ORDER BY textID asc;", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
  });

// app.get("/1", (req, res) => {
//   db.query("SELECT text FROM  `1_سطر المركز` ORDER BY textID asc", (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });


// app.post("/create", (req, res) => {
//   const name = req.body.name;
//   const age = req.body.age;
//   const country = req.body.country;
//   const position = req.body.position;
//   const wage = req.body.wage;

//   db.query(
//     "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
//     [name, age, country, position, wage],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send("Values Inserted");
//       }
//     }
//   );
// });


// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });
11
15
24
30
10
32
10
24
10
22
10
24
23
10
24
20
10
23
24
30
30
30
30
30
31