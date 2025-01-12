exports.handler = async (event, context) => {
  try {
    // Verifique se a requisição é POST
    if (event.httpMethod === 'POST') {
      let webhookEvent;

      try {
        // Tenta analisar o corpo da requisição como JSON
        webhookEvent = JSON.parse(event.body);
      } catch (error) {
        // Se falhar, retorne erro 400
        console.error('Erro ao analisar o corpo da requisição:', error);
        return {
          statusCode: 400,
          body: 'Erro ao analisar o corpo da requisição',
        };
      }

      console.log('Webhook recebido:', webhookEvent);

      // Verifique o tipo de evento
      if (webhookEvent.event_type === 'PAYMENT.SALE.COMPLETED') {
        console.log('Pagamento concluído:', webhookEvent.resource);
      }

      return {
        statusCode: 200,
        body: 'Webhook processado com sucesso',
      };
    }

    // Se não for POST, retorne erro 405
    return {
      statusCode: 405,
      body: 'Método não permitido',
    };
  } catch (error) {
    console.error('Erro no webhook:', error);
    return {
      statusCode: 500,
      body: 'Erro interno do servidor',
    };
  }
};
