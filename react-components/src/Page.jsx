import Book from "./components/book";
import Footer from "./components/footer";
import Header from "./components/header";

function Page() {

  const books = [{}]
  return (
    <div>
      <Header />
      {books.map(book => {
        const name = book.name;
        console.log({name});

        return <Book />
      })}
      <Footer />
      
    </div>
  );
}

export default Page;
