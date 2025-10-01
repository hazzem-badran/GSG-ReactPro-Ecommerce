import Header from '@/components/ui/navigation/header'
import Container from '@/components/layout/Container'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      
      {/* Main content */}
      <main className='py-8'>
        {/* <Container> */}
          <div className='space-y-8'>
            <h1 className='text-4xl font-bold text-center'>
              Welcome to Our E-commerce Store
            </h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Example cards */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item} 
                  className='bg-white rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow'
                >
                  <h3 className='text-xl font-semibold mb-2'>Product {item}</h3>
                  <p className='text-gray-600 mb-4'>
                    This is a sample product description that shows how the layout works.
                  </p>
                  <div className='flex justify-between items-center'>
                    <span className='text-2xl font-bold text-green-600'>$99.99</span>
                    <button className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors'>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        {/* </Container> */}
      </main>
    </div>
  )
}

export default Home