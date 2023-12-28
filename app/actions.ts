"use server" //essa pagina será executada como uma ação do servidor

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  )

  const data = await response.json()

  return data
}
