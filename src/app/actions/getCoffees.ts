export const getCoffeees = async (q?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/coffee${q?.length ? q : ""}`,

    {
      cache: "no-cache",
    }
  );
  const coffees = await res.json();
  return coffees;
};
