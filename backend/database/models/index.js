const sequelize = require('../config.js');
const { DataTypes } = require('sequelize');

//Import models
const User = require('./User.js')(sequelize, DataTypes);
const Emotion = require('./Emotion.js')(sequelize, DataTypes);
const Recommendation = require('./Recommendation.js')(sequelize, DataTypes);

//Create relations
User.hasMany(Emotion, { foreignKey: 'userId' });
Emotion.belongsTo(User, { foreignKey: 'userId' });

Emotion.hasMany(Recommendation, { foreignKey: 'emotionId' });
Recommendation.belongsTo(Emotion, { foreignKey: 'emotionId' });

module.exports = {
  sequelize,
  User,
  Emotion,
  Recommendation
};
