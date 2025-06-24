import Tag from "@/components/Tag";

const EventDetails = ({ event }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <img
          src={event?.image}
          alt={event?.name}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">
        {event?.name}
      </h1>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-1">
        Location: {event?.location}
      </h2>
      <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        Artist: {event?.artist}
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {event?.tags?.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-400 leading-relaxed mb-4">
        {event?.description}
      </p>
      <div className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-6">
        Price: ${event?.price}
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
        Buy tickets
      </button>
    </div>
  );
};

export default EventDetails;