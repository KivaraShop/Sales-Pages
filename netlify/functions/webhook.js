exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const webhookEvent = JSON.parse(event.body);

    console.log('Webhook recebido:', webhookEvent);

    if (webhookEvent.event_type === 'PAYMENT.SALE.COMPLETED') {
      console.log('Pagamento concluído:', webhookEvent.resource);
    }

    return {
      statusCode: 200,
      body: 'Webhook processado com sucesso',
    };
  }

  return {
    statusCode: 405,
    body: 'Método não permitido',
  };
};
