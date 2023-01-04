import Book from "./components/book";
import Footer from "./components/footer";
import Header from "./components/header";
import LIST_OF_BOOKS from "./data/books";
import "./page.css";

function Page() {
  const listOfBooks = LIST_OF_BOOKS;
  return (
    <div className="page">
      <Header />
      <div className="books-container">
        {listOfBooks.map((book) => {
          const name = book.title;
          const imageUrl = book.link
          console.log({ name });

          return (
            <>
              <div className="book-container">
                Raw: {JSON.stringify(book).slice(0, 12)}
                <br />  
                <br />  
                <br />  
                <Book name={name} imageUrl={imageUrl} />
              </div>
            </>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Page;
