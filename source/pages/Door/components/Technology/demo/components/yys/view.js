import React from 'react';
import { Row, Col, Card } from 'antd';
import RadarChat from './RadarChat';

class RadarLineChart extends React.Component {
	render() {
		const data = [
			{ className: '鬼切', attack: 'S', life: 'B', defence: 'C', speed: 'S', crit: 'S' },
		];
		return (
			<div className="gutter-example radar-chart-demo">
				<Row gutter={24}>
					<Col className="gutter-row" md={24}>
						<div className="gutter-box">
							<Card title="D3 雷达图" bordered={false}>
								<RadarChat data={data} />
							</Card>
						</div>
					</Col>
				</Row>
			</div>
		)
	}
}

export default RadarLineChart;