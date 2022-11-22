const models = require("../models/Index");
const { Op, QueryTypes} = require("sequelize");

const getAllAdministrasiDesa = async (req, res, err) => {
	let desa = ''

	try {

			desa = await models.sequelize.query(
				'SELECT json_build_object('+
          '\'type\', \'FeatureCollection\','+
          '\'features\', json_agg(ST_AsGeoJSON(a.*)::json)'+
          ')'+
        ' from "administrasi_desa_polygon" a',
				{
					type: QueryTypes.SELECT
				}
			);

		if (desa) {

			return res.status(200).json({
				message: "Success get data by administrasi_desa",
				data: desa[0].json_build_object
			});
		} else {
			return res.status(404).json({
				message: err.message
			});
		}
	} catch (error) {
		return res.status(500).json({
			message: error.message
		});
	}
}

module.exports = {
	getAllAdministrasiDesa,
	createAllAdministrasiDesa
};
