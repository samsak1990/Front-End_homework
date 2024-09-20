export default function Reset({ counter, handleReset }) {
  return (
    <div>
      {!!counter && (
        <button
          onClick={handleReset}
          style={{
            marginTop: "10px",
            backgroundColor: "red",
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
