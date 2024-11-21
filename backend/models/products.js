module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
      'Product',
      {
        product_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        seller_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        brand: {
          type: DataTypes.STRING,
        },
        article_number: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
        },
        image_url: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        discount_price: {
          type: DataTypes.DECIMAL(10, 2),
        },
        keywords: {
          type: DataTypes.STRING,
        },
        purchase_plan: {
          type: DataTypes.INTEGER,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: 'products',
        timestamps: false,
      }
    );
  
    Product.associate = (models) => {
      Product.belongsTo(models.User, { foreignKey: 'seller_id' }); // Связь с моделью User
    };
  
    return Product;
  };
  