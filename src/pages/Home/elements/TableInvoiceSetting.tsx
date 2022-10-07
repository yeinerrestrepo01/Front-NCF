import { Checksolid, NoChecksolid } from 'global/icons/inex';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting'
import React from 'react'

interface TableInvoiceSettingProps {
    data: IinvoiceSetting[];
    HandleInfoCorrection: (invoiceSetting: IinvoiceSetting) => void;
}

const TableInvoiceSetting: React.FC<TableInvoiceSettingProps> = ({ data, HandleInfoCorrection}) => {
    return (
        <div>
            {data?.length > 0 ?
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th align='center'>Codigo Producto</th>
                            <th align='center'>QTY</th>
                            <th align='center'>Precio Bruto</th>
                            <th align='center'>Descuento</th>
                            <th align='center'>ITBIS</th>
                            <th align='center'>ISC</th>
                            <th align='center'>ISCE</th>
                            <th align='center'>Neto</th>
                            <th align='center'>Interes Financiamiento</th>
                            <th align='center'>Free Goods</th>
                            <th align='center'>Seleccionado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((info) => (<tr key={info.idProduct} className={`${info.freeGoods === 0? 'item-select':''}`} onClick={()=> info.freeGoods === 0 && HandleInfoCorrection(info)}>
                            <th scope="row">{info.idProduct}</th>
                            <td align='center'>{info.amount}</td>
                            <td align='right' width={'130px'}>{info.brutoTotal}</td>
                            <td align='right' width={'130px'}>{info.descuentoAmount}</td>
                            <td align='right' width={'110px'}>{info.taxAmount}</td>
                            <td align='right' width={'120px'}>{info.isc}</td>
                            <td align='right' width={'120px'}>{info.isce}</td>
                            <td align='right' width={'120px'}>{info.netAmount}</td>
                            <td align='right' width={'130px'}>{info.interestValue}</td>
                            <td align='center'>{info.freeGoods === 0? <NoChecksolid className='iconos-check'/> : <Checksolid className='iconos-check'/>}</td>
                            <td></td>
                        </tr>))}
                    </tbody>
                </table> : <div></div>}
        </div>
    )
}

export default TableInvoiceSetting