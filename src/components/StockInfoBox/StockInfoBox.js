import React from "react";
import Stock from "./components/Stock/Stock";

class StockInfoBox extends React.Component {
    renderStocks = () => {
        const { stocks } = this.props;

        return stocks.map((infoObject, index) => (
            <Stock
                key={index}
                symbol={infoObject.symbol}
                price={infoObject.price}
                handleClick={this.props.deleteStock}
                indexOfStock={index}
            />
        ));
    };

    render() {
        return <div>{this.renderStocks()}</div>;
    }
}

export default StockInfoBox;
