export const handler = async () => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({ message: 'Good night!' }),
  }
  return response
}
