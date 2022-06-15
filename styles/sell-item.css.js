
export const sellItemStyle = `
.card {
    margin: 10px 15px;
    padding: 0;
    border-radius: 16px;
    background-color: #E52142;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 8px 8px 15px 5px rgba(0,0,0,0.5); 
    box-shadow: 8px 8px 15px 5px rgba(0,0,0,0.5);
    transition: transform .3s;
    grid-row-end: span 21;
    overflow: hidden;
    position:relative;
}

.card:hover {
    transform: scale(1.05);
    cursor: pointer;
}

.image-container {
  height: 70%;
  width: 100%;
  border-bottom: 1px solid black;
}

img {
    max-width:100%;
    max-height:100%;
    height: 100%;
    width: 100%;
}

h4, h5, h6 {
  margin: 0;
  padding: 0;
}

.sell-item-discount-price {
  display: inline-block;
}

.sell-item-price {
  display: inline-block;
}

.sell-item-price-container {
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 20px;
  margin-bottom: 10px;
}

.sell-item-name-rating {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
}

.sell-item-discount {
  position: absolute;
  top: 5px;
  right: 5px;
  color: red;
}

`