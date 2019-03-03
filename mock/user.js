// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {

  'GET /api/system/session': (req, res) => {
    if (1 == 1) {
    //if (req.headers['x-auth-token'] == '1234567890abcdef') {
      res.status(200).send({
        token: '1234567890abcdef',
        name: '吴涛',
        role: 'ROLE_PARENT',
        // role: 'ROLE_PARENT',
        // resource_ids: [],
      });
    } else {
      res.status(401).send({
        status: 401,
        error: 'Unauthorized',
        message: '会话不存在',
      });
    }
  },

  'POST /api/system/session': (req, res) => {
    const { login_name, password } = req.body;
    if (login_name == 'watertao' && password == '888888') {
      res.status(201).send({
        token: '1234567890abcdef',
        name: 'watertao',
        resource_ids: []
      });
    } else {
      res.status(401).send({
        status: 401,
        error: 'Unauthorized',
        message: '用户名或密码错误'
      })
    }
  },

};
