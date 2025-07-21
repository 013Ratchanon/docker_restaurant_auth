import db from "../models/index.js";
const User = db.User;
const Role = db.Role;
import bcrypt from "bcryptjs"; //ใช้ในการเข้ารหัส เพืื่อเวลาเซฟเข้าฐานข้อมูลจะอ่านค่าไม่ได้
import jwt from "jsonwebtoken"; //เป็นกุญแจสำหรับเปิดปรุตูเข้า ถ้าไม่มีก็เข้าไม่ได้

import { Op } from "sequelize"; //เพื่อใช้คำสั่งพวก AND และ OR ได้
const authController = {};

authController.signUp = async (req, res) => {
  const { username, name, email, password } = req.body;
  if (!username || !name || !email || !password) {
    res.status(400).send({ message: "Please provide all required feilds!" });
    return;
  }
};
// SELECT * FROM User WHERE username = username
await User.findOne({ where: { username } })
  .select(-password)
  .then((user) => {
    if (user) {
      res.status(400).send({ message: "Username already existed!" });
      return;
    }
  });
const newUser = {
  username,
  name,
  email,
  password,
};
User.create(newUser).then((user) => {
  if (req.body.roles) {
    //SELECT * FROM Role WHERE name= role1 OR name = role2
    Role.findAll({
      where: {
        name: { [Op.or]: req.body.roles },
      },
    }).then((roles) => {
      if (roles?.length === 0) {
        user.setRoles(roles).then(() => {
          res.send({ message: "User registered successfully" });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully" });
        });
      }
    });
  } else {
    user.setRoles([1]).then(() => {
      res.send({ message: "User registered successfully1" });
    });
  }
});
export default authController;
