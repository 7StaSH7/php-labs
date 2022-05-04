<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class CountAddresses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'customer:count-addresses {id}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Count addresses for user with specific {id}';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        echo 'There are ' .
            (User::where('id', $this->argument('id'))->withCount('addresses')->get())[0]->addresses_count . ' addresses were found for user with id: ' .
            $this->argument('id');
        return 0;
    }
}
