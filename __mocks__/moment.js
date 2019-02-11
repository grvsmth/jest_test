const mockHour = jest.fn(() => "whee");
const mockMoment = jest.fn().mockImplementation(() => {
    return {"hour": mockHour};
});

module.exports = mockMoment;
