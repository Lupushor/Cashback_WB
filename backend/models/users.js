module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', // Имя модели
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      telegram_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Уникальный идентификатор
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'users', // Название таблицы в базе данных
      timestamps: false, // Если не используете createdAt/updatedAt
    }
  );

  // Ассоциации, если есть
  User.associate = (models) => {
    User.hasMany(models.Product, { foreignKey: 'seller_id' }); // Пример связи
  };

  return User;
};
