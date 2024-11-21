module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        user_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        telegram_id: {
          type: DataTypes.STRING,
          allowNull: false,
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
        tableName: "users",
        timestamps: false,
      }
    );
    return User;
  };
  