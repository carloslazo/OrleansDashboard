var React = require("react");
var Chart = require("./time-series-chart.jsx");

 const GrainGraph = props => {
    const values = [];
    const timepoints = [];
    Object.keys(props.stats).forEach(key => {
        values.push(props.stats[key]);
        timepoints.push(props.stats[key].period);
    });

    if (!values.length) {
        return null;
    }

    while (values.length < 100) {
        values.unshift({ count: 0, elapsedTime: 0, period: 0, exceptionCount: 0 });
        timepoints.unshift("");
    }

    return <div>
        <h4>{props.grainMethod}</h4>
        <Chart
            timepoints={timepoints}
            series={[
                values.map(z => z.exceptionCount),
                values.map(z => z.count),
                values.map(z => (z.count === 0 ? 0 : z.elapsedTime / z.count))
            ]}
        />
    </div>
};

module.exports = GrainGraph
