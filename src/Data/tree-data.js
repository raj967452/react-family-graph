const usersFakeTreeData = [{
	id: 1,
	familyData: {
		timestamp: '15/02/2021 10:00',
		name: 'Ben',
		personalData: {
			relation: "Father",
			age: 45,
			gender: "male"
		},
		children: [
			{
				name: 'John',
				personalData: {
					relation: "Son",
					age: 20,
					gender: "male"
				},
				children: [
					{
						name: 'John',
						personalData: {
							relation: "Son",
							age: 20,
							gender: "male"
						},
						children: [
							{
								name: 'John',
								personalData: {
									relation: "Son",
									age: 20,
									gender: "male"
								}
							}, {
								name: 'John',
								personalData: {
									relation: "Son",
									age: 20,
									gender: "male"
								}
							}
						]
					},
					{
						name: 'John',
						personalData: {
							relation: "Son",
							age: 20,
							gender: "male"
						}
					},
					{
						name: 'John',
						personalData: {
							relation: "Son",
							age: 20,
							gender: "male"
						}
					}
				]
			},
			{
				name: 'Freda',
				personalData: {
					relation: "Daughter",
					age: 22,
					gender: "female"
				},
				children: []
			}
		]
	}
},
{
	id: 2,
	familyData: {
		timestamp: '15/02/2021 10:00',
		name: 'Ben',
		personalData: {
			relation: "Father",
			age: 45,
			gender: "male"
		},
		children: [
			{
				name: 'John',
				personalData: {
					relation: "Son",
					age: 20,
					gender: "male"
				},
				children: []
			},
			{
				name: 'Freda',
				personalData: {
					relation: "Daughter",
					age: 22,
					gender: "female"
				},
				children: []
			}
		]
	}
}];

export default usersFakeTreeData;