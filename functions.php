
<?php
add_action('graphql_register_types', function () {
    register_graphql_object_type('siteUsers', [
        'fields' => [
            'email' => ['type' => 'String'],
            'fullName' => ['type' => 'String'],
            'mobile' => ['type' => 'String'],
            'referalCode' => ['type' => 'String'],
        ],
    ]);
});

function register_custom_schema() {
    register_graphql_schema([
        'type' => 'siteUsers',
        'query' => [
            'siteusers' => [
                'type' => ['list_of' => 'siteUsers'],
                'resolve' => function () {
                    // Add your custom logic here to retrieve and return the books data
                    // For example, you can query a custom table in the database
                    // and return an array of book objects
                    return [
                        ['id' => '1', 'title' => 'Book 1', 'author' => 'Author 1'],
                        ['id' => '2', 'title' => 'Book 2', 'author' => 'Author 2'],
                    ];
                },
            ],
        ],
    ]);
}
add_action('graphql_register_types', 'register_custom_schema');
