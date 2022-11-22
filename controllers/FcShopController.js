const models = require("../models/Index");
const { Op, QueryTypes} = require("sequelize");


const getFcshopByIsoline = async (req, res, err) => {
  let fc_shop=""
  try {
    if(req.body.competitorCategory == 'shopping_mall'){
      fc_shop = await models.sequelize.query(
        'SELECT json_build_object('+
          '\'type\', \'FeatureCollection\','+
          '\'features\', json_agg(ST_AsGeoJSON(a.*)::json)'+
          ')'+
        ' from mst_malls a'+
        ' WHERE ST_Contains(ST_GEOMFROMTEXT(\'POLYGON(('+req.body.isolinePolygon+'))\', 4326), a.geom);',
        {
          type: QueryTypes.SELECT
        }
      );
    }else{
      fc_shop = await models.sequelize.query(
        'SELECT json_build_object('+
          '\'type\', \'FeatureCollection\','+
          '\'features\', json_agg(ST_AsGeoJSON(a.*)::json)'+
          ')'+
        ' from fc_shops a'+
        ' WHERE ST_Contains(ST_GEOMFROMTEXT(\'POLYGON(('+req.body.isolinePolygon+'))\', 4326), a.geom) and a.fc_name=\''+req.body.competitorCategory+'\';',
        {
          type: QueryTypes.SELECT
        }
      );
    }
    if (fc_shop) {
      let result = {
        category_competitor: req.body.competitorCategory,
        baseline: req.body.competitorBaseline,
        num_competitor: fc_shop[0].json_build_object.features.length,
        diff_competitor: fc_shop[0].json_build_object.features.length - req.body.competitorBaseline,
        points: fc_shop[0].json_build_object
      }
      return res.status(200).json({
        message: "Success get data by isoline",
        data: result
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
};

const getFilePath = async (req, res, err) => {
  let fc_shop=""
  try {
      console.log("API called by QGIS, there are data from QGIS")
      console.log("SAR Image : "+req.body.sar_image)
      console.log("Mask File : "+req.body.mask_file)
      console.log("Output File : "+req.body.output_file)
 
      return res.status(200).json({
        message: "Success call API",
        data: {
          sar_image: req.body.sar_image,
          mask_file: req.body.mask_file,
          output_file: req.body.output_file
        }
      });

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getFcshopByIsoline,
  getFilePath
};
