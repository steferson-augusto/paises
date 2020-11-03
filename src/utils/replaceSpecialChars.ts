const replaceSpecialChars = (text = ''): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove acentos
    .replace(/([^\w]+|\s+)/g, '_') // Substitui espaço e outros caracteres por underline
    .replace(/_+/g, '_') // Substitui multiplos underline's por um único underline
    .replace(/(^_+|_+$)/, '') // Remove underline's extras do final ou do inicio da string
}

export default replaceSpecialChars
