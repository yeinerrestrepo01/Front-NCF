import { IDocumectCorrection, IInvoiceDocument } from 'global/types/IDocumectCorrection';
import { IinvoiceSetting } from 'global/types/IinvoiceSetting';
import React, { useState } from 'react'
import { TableInvoiceSetting } from './elements';
import TableInvocecorrection from './elements/TableInvocecorrection';
import useCorrectInvoice from './services/CorrectInvoice';
import useInvoiceSetting from './services/useInvoiceSetting'
const Home: React.FC = () => {

    const [origen, setOrigen] = useState('');
    const [invoice, setInvoice] = useState(null);
    const [invoceCustomer, setInvoceCustomer] = useState(null)
    const [customer, setcustomer] = useState('')
    const [correctionInfo, setcorrectionInfo] = useState<IinvoiceSetting>(null)

    const { data } = useInvoiceSetting(invoice, invoceCustomer);
    const { mutate } = useCorrectInvoice();


    //Funcion para consultat factuas
    const handleSearchInvoice = () => {
        if (origen.length > 0 && customer.length > 0) {
            setInvoice(origen);
            setInvoceCustomer(customer)
        }
    }

    const HandleInfoCorrection = (invoiceSetting: IinvoiceSetting) => {
        if (invoiceSetting != null) {
            setcorrectionInfo(invoiceSetting);
        }
    }

    const HandlenSendCorrection = (documentoOriginal: IInvoiceDocument, documentoCorrecion: IInvoiceDocument) => {
        if (origen.length > 0 && customer.length > 0) {
            mutate({
                documentoOriginal: [documentoOriginal], documentoCorrecion: [documentoCorrecion], solitudSoporteDocumento:
                {
                    idCustumer: invoceCustomer,
                    ncf: invoice,
                    idSupport: ""
                }
            }, {
                onSuccess: (res) => {
                    if (res.estadoHttp === 200) {
                        alert("Proceso realizado exitosamente.");
                    } else {
                        alert("No se pudo realizar la ejecucion del procso exitosamente")
                    }
                }
            });
        }
    }

    return (
        <div className='container mt-4'>
            <h3>Correcion de Documento</h3>
            <hr></hr>
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="nfcOrigen">NCF Origen</label>
                    <input type="text" className="form-control" id="nfcOrigen" onChange={(value) => setOrigen(value.target.value)} value={origen} required />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="codigoCliente">Codigo Cliente</label>
                    <input type="text" className="form-control" id="codigoCliente" onChange={(value) => setcustomer(value.target.value)} value={customer} required />
                </div>
                <div className="form-group mt-4">
                    <label htmlFor="tikect">Id de reclamacion</label>
                    <input type="text" className="form-control" id="tikect" required />
                </div>
                <div className='mt-3'>
                    <button type="button" className="btn btn-primary" onClick={handleSearchInvoice}>Consultar NCF</button>
                </div>
            </form>
            <div className='col-12 mt-3'>
                <h2>Documento Original</h2>
                <TableInvoiceSetting data={data} HandleInfoCorrection={HandleInfoCorrection} />
            </div>

            <div className='col-12 mt-4'>
                <h2 className='text-danger'>Documento Correcion</h2>
                <hr></hr>
                {
                    correctionInfo ? <TableInvocecorrection data={correctionInfo} HandlenSendCorrection={HandlenSendCorrection} /> : <div></div>
                }
            </div>
        </div>
    )
}

export default Home