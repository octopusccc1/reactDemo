import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'ppfish';

class MarketPrecipitation extends Component {

  constructor(props) {
    super();
    this.state = {
      limit: 0,
      current: 1,
      keyword: '',
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    const { getMarketPrecipitationList } = this.props;
    const { keyword } = this.state;
    //state筛选
    this.setState({
      current: pagination.current
    });
    const data ={
      keyword,
      limit: pagination.current * 50,
    }
    getMarketPrecipitationList(data)
  }
  getCustomerTable() {
    const { list, isMarketPrecipitationListLoading } = this.props;
    const columns = [
      {
        title: '',
        dataIndex: 'source',
        className: 'logo-column',
        key: 'logo',
        width: 50,
        render: (text, record) => {
          if (text === 1 && record.isPrivate) {
            // 标签创建有两种方式：公共标签 and 私有标签
            text = 1.1;
          }
          const SOURCE = CUSTOMER_SOURCE_MAP[text] || {};
          const { icon_image, type } = SOURCE;
          return (
            <Tooltip placement="bottom" title={`${type}创建客群`}>
              <img src={icon_image} alt="类型" className="u-img-link" />
            </Tooltip>
          );
        }
      },
      {
        title: '客群名称',
        sorter: true,
        sorterType: 'firstLetter',
        sortOrder: sortBy == 'name' && order,
        dataIndex: 'name',
        className: 'name-column',
        key: 'name',
        width: '15%',
        render: (text) => {
          return (
            <Tooltip placement="bottom" title={text}>
              <p className="fishd-table-ellipsis-col">{text}</p>
            </Tooltip>
          );
        }
      },
      {
        title: '客群描述',
        dataIndex: 'description',
        key: 'description',
        render: (text) =>
          <Tooltip placement="bottom" title={text}>
            <p className="fishd-table-ellipsis-col">{text || '--'}</p>
          </Tooltip>
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        width: '12.5%',
        render: (text, record) => {
          let Status;
          switch (text) {
            case 1:
              Status = (<span><i className="u-circle grey" />等待创建</span>);
              break;
            case 2:
              Status = (<span><i className="u-circle blue" />创建中</span>);
              break;
            case 3:
              Status = (<span><i className="u-circle green" />创建成功</span>);
              break;
            case 4:
              Status = (
                <span>
                  <i className="u-circle red" />创建失败
                  <Tooltip placement="bottom" title={record.stateTip}>
                    <Icon type="question-circle-o" style={{ marginLeft: '5px', color: '#ccc', fontSize: 12 }} />
                  </Tooltip>
                </span>
              );
              break;
            case 5:
              Status = (<span><i className="u-circle yellow" />挂起中</span>);
              break;
            default:
              Status = (<span><i className="u-circle grey" />未知状态</span>
              );
              break;
          }
          return (<span className="fishd-table-ellipsis-col">{Status}</span>);
        }
      },
      {
        title: '客群量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        render: (text) => <p className="fishd-table-ellipsis-col">{formatUnit(text)}</p>
      },
      {
        title: '创建人',
        dataIndex: 'userName',
        key: 'userName',
        width: '10%',
        render: (text) =>
          <Tooltip placement="bottom" title={text}>
            <p className="fishd-table-ellipsis-col">{text}</p>
          </Tooltip>
      },
      {
        title: '客群id',
        sorter: true,
        sortOrder: sortBy == 'id' && order,
        dataIndex: 'id',
        width: '10%',
        render: (text) => <p className="fishd-table-ellipsis-col" title={text}>{text}</p>
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
        sorter: true,
        defaultSorter: 'descend',
        sortOrder: sortBy == 'createTime' && order,
        width: '15%',
        render: (text) => <p className="fishd-table-ellipsis-col">{getTimeStamp(text)}</p>
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        width: 130,
        render: (text, record) => {
          let source = record.source;
          if (source === 1 && record.isPrivate) {
            // 标签创建有两种方式：公共标签 and 私有标签
            source = 1.1;
          }
          const SOURCE = CUSTOMER_SOURCE_MAP[source] || {};
          const link = `${SOURCE['insight_link']}?customerId=${record.id}`;
          const insightTabClass = classNames('iconfont', 'icon-Group', {
            'disable-tab': record.state !== 3,
            'edit-tab': record.state === 3
          });
          return (
            <div className="u-operation">
              <span>
                <Tooltip placement="bottom" title="洞察">
                  <i onClick={() => this.handleInsightLink(link, record)} className={insightTabClass} />
                </Tooltip>
                <Tooltip placement="bottom" title="编辑">
                  <i onClick={() => this.showModal(record.id, record)}
                    className="iconfont icon-bianji edit-tab" />
                </Tooltip>
                <Tooltip placement="bottom" title="删除">
                  <i onClick={() => this.handleDeleteCustomerList(record.id, record)}
                    className="iconfont icon-shanchu edit-tab" />
                </Tooltip>
              </span>
            </div>
          );
        },
      },
    ];
    return (
      <Table columns={columns}
        offsetHeight={270}
        dataSource={list}
        activeRowByClick
        onChange={this.handleTableChange}
        pagination={{ pageSize: PAGE_SIZE, total: total, current: this.state.current, }}
        loading={isMarketPrecipitationListLoading}
        scroll={{ y: 'calc( 100vh - 313px )' }}
        rowKey="id" />
    );
  }


}

export default MarketPrecipitation;