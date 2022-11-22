const models = require("../models/Index");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const authentication = require('../configs/passport');

const getAllUser = async (req, res, err) => {
  try {
    const user = await models.m_user.findAll({
      order: [
        ['id', 'ASC'],
      ]
    });
    if (user.length !== 0) {
      return res.status(200).json({
        message: "Success get all data user",
        data: user
      });
    } else {
      return res.status(404).json({
        message: "Data user is empty",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getMachine = async (req, res, err) => {
  try {
    let user = {}
    user = await models.m_user.findAll({
      where: {
        lineName: 'Machine'
      },
      order: [
        ['id', 'ASC'],
      ]
    });
        
    if (user.length !== 0) {
      return res.status(200).json({
        message: "Success get data user",
        data: user
      });
    } else {
      return res.status(404).json({
        message: "Data user is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}; 

const getUserById = async (req, res, err) => {
  try {
    const user = await models.m_user.findAll({
      where: {
        id: req.params.id
      }
    });

    if (user.length !== 0) {
      return res.status(200).json({
        message: "Success get data user by id",
        data: user
      });
    } else {
      return res.status(404).json({
        message: "Data user is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const getUserManhourInput = async (req, res, err) => {
  try {
    let user = {}
    if(req.body.isLineHead==1 || (req.body.isSectionHead==1 && req.body.lineId != null)){
      if(req.body.lineName != 'Machine'){
        user = await models.m_user.findAll({
          where: {
            lineId: req.body.lineId
          },
          order: [
            ['id', 'ASC'],
          ]
        });
      }else{
        user = await models.m_user.findAll({
          where: {
            lineId: req.body.lineId,
            isLineHead: 0,
            isAdmin: 0
          },
          order: [
            ['id', 'ASC'],
          ]
        });
      }
    }else if(req.body.staffRole == 'Staff Section'){
      user = await models.m_user.findAll({
        where: {
          sectionId: req.body.sectionId
        },
        order: [
          ['id', 'ASC'],
        ]
      });
    }
    else{
      console.log(req.body)
      user = await models.m_user.findAll({
        where: {
          username: req.body.username
        }
      });
    }
    
    if (user.length !== 0) {
      return res.status(200).json({
        message: "Success get data user",
        data: user
      });
    } else {
      return res.status(404).json({
        message: "Data user is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
}; 

const createUser = async (req, res, err) => {
  try {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) {
          return res.json({
              status: "false",
              message: err
          });
      }
      let isAdmin = 0
      let isSectionHead = 0
      let isLineHead = 0
      if (req.body.staffRole == "Administrator" || req.body.staffRole == 'Machine Admin'){
        isAdmin = 1
      }else if (req.body.staffRole == "Section Head"){
        isSectionHead = 1
      }else if (req.body.staffRole == "Line Head" || req.body.staffRole == "Machine Operator"){
        isLineHead = 1
      }
      const user = models.m_user.create({
          username: req.body.username,
          staffRole: req.body.staffRole,
          staffName: req.body.staffName,
          password: hash,
          departmentId: req.body.departmentId,
          departmentName: req.body.departmentName,
          sectionId: req.body.sectionId,
          sectionName: req.body.sectionName,
          lineId: req.body.lineId,
          lineName: req.body.lineName,
          groupName: req.body.groupName,
          isAdmin: isAdmin,
          isLineHead: isLineHead,
          isSectionHead: isSectionHead,
          email: req.body.email
      });
      if (user) {
        return res.status(200).json({
          message: "Success insert data user",
          data: user
        });
      } else {
        return res.status(404).json({
          message: err.message
        });
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const editUser = async (req, res, err) => {
  try {
    // bcrypt.hash(req.body.password, 10, (err, hash) => {
    //   if (err) {
    //       return res.json({
    //           status: "false",
    //           message: err
    //       });
    //   }
      let isAdmin = 0
      let isSectionHead = 0
      let isLineHead = 0
      if (req.body.staffRole == "Administrator" || req.body.staffRole == 'Staff Admin'){
        isAdmin = 1
      }else if (req.body.staffRole == "Section Head"){
        isSectionHead = 1
      }else if (req.body.staffRole == "Line Head"){
        isLineHead = 1
      }
      console.log(req.body.staffRole)
      const updateUser = models.m_user.update(
        {
          username: req.body.username,
          staffRole: req.body.staffRole,
          staffName: req.body.staffName,
          //password: hash,
          departmentId: req.body.departmentId,
          departmentName: req.body.departmentName,
          sectionId: req.body.sectionId,
          sectionName: req.body.sectionName,
          lineId: req.body.lineId,
          lineName: req.body.lineName,
          groupName: req.body.groupName,
          isAdmin: isAdmin,
          isLineHead: isLineHead,
          isSectionHead: isSectionHead,
          email: req.body.email
        },
        {
          where: {
            id: req.params.id
          }
        }
      );

      if (updateUser.length !== 0) {
        return res.status(200).json({
          message: "Success update data user by id"
        });
      } else {
        return res.status(404).json({
          message: "Data user is not found",
          data: {}
        });
      }
    //});
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const deleteUser = async (req, res, err) => {
  try {
    const user = await models.m_user.destroy({
      where: {
        id: req.params.id
      }
    });

    if (user) {
      return res.status(200).json({
        message: "Success delete user by id"
      });
    } else {
      return res.status(404).json({
        message: "Data user is not found",
        data: {}
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const login = async (req, res, err) => {
  try {
      const loginUser = await models.m_user.findOne(
        {
          where: {
            username: req.body.username
          }
        }
      );

      if (loginUser.length !== 0) {
          bcrypt.compare(req.body.password, loginUser.password, (err, result) => {
            if (err) {
                return res.status(200).json({
                  status: "false",
                  message: "Authentication failed. Wrong Password"
                });
            }
            if (result) {
                const payload = {
                    id: loginUser.id,
                    staffName: loginUser.staffName,
                    username: loginUser.username,
                    staffRole: loginUser.staffRole,
                    isAdmin: loginUser.isAdmin,
                    isLineHead: loginUser.isLineHead,
                    isSectionHead: loginUser.isSectionHead,
                    lineId: loginUser.lineId,
                    lineName: loginUser.lineName,
                    sectionId: loginUser.sectionId,
                    sectionName: loginUser.sectionName
                };

                const token = authentication.returnSignJwtToken(payload);
                return res.status(200).json({
                  status: "true",
                  message: "Login Success",
                  data: {
                    username: payload.username,
                    id: payload.id,
                    staffName: payload.staffName,
                    staffRole: payload.staffRole,
                    isAdmin: payload.isAdmin,
                    isLineHead: payload.isLineHead,
                    isSectionHead: payload.isSectionHead,
                    lineId: payload.lineId,
                    lineName: payload.lineName,
                    sectionId: payload.sectionId,
                    sectionName: payload.sectionName,
                    token: token.token,
                    expires_in: token.opts.expiresIn
                  }
                });
          
            } else {
              return res.status(200).json({
                status: "false",
                message: "Authentication failed. Wrong Password"
              });
            }
        })
        
      } else {
        return res.status(404).json({
          message: "User is not found",
          data: {}
        });
      }
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const changePassword = async (req, res, err) => {
  console.log(req.body)
  const loginUser = await models.m_user.findOne(
    {
      where: {
        username: req.body.username
      }
    }
  );
  try {
      bcrypt.compare(req.body.oldPassword, loginUser.password, (err, result) => {
        if (err) {
            return res.status(404).json({
              status: "false",
              message: "Authentication failed. Wrong Password"
            });
        }
        if (result) {
            //------
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if (err) {
                  return res.json({
                      status: "false",
                      message: err
                  });
              }
              const updateUser = models.m_user.update(
                {
                  password: hash
                },
                {
                  where: {
                    username: req.body.username
                  }
                }
              );
        
              if (updateUser.length !== 0) {
                return res.status(200).json({
                  message: "Success change password"
                });
              } else {
                return res.status(404).json({
                  message: "Data user is not found",
                  data: {}
                });
              }
            })
            //----- 
        }else {
          return res.status(400).json({
            status: "false",
            message: "Authentication failed. Wrong Password"
          });
        }
      })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const resetPassword = async (req, res, err) => {
  
    try {
            //------
            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
              if (err) {
                  return res.json({
                      status: "false",
                      message: err
                  });
              }
              const updateUser = models.m_user.update(
                {
                  password: hash
                },
                {
                  where: {
                    username: req.body.username
                  }
                }
              );
        
              if (updateUser.length !== 0) {
                return res.status(200).json({
                  message: "Success change password"
                });
              } else {
                return res.status(404).json({
                  message: "Data user is not found",
                  data: {}
                });
              }
            })
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  getAllUser,
  getUserById,
  createUser,
  deleteUser,
  editUser,
  login,
  getUserManhourInput,
  changePassword,
  getMachine,
  resetPassword
};
